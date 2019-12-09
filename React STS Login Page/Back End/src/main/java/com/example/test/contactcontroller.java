package com.example.test;

import java.security.spec.KeySpec;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;
import java.util.Optional;

import javax.crypto.Cipher;
import javax.crypto.SecretKey;
import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.PBEKeySpec;
import javax.crypto.spec.SecretKeySpec;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3001")

public class contactcontroller {
	
	 private static String secretKey = "boooooooooom!!!!";
	 private static String salt = "ssshhhhhhhhhhh!!!!";
	
	@Autowired
	contactrepository contactRepository;

	

	
	
	//To check and register the values of user
	
	@RequestMapping(method = RequestMethod.POST, value = "/Register")
	public boolean  save(@RequestBody contact contact) {
		Iterable<contact> alldata = contactRepository.findAll();
		for (contact value : alldata) {
			if ((value.getUserName().equals(contact.getUserName())) || (value.getEmail().equals(contact.getEmail())) ){
				return false;
			}
		}
		contact.setPassword(encrypt(contact.password,secretKey));
		contactRepository.save(contact);
		return true;
	
        }
	
	
	
	//To get the details of particular username
	
	@RequestMapping(method=RequestMethod.GET, value="/{UserName}")
    public Optional<contact> show(@PathVariable String UserName) {
    	System.out.println("in userfor");
        return contactRepository.findByUserName(UserName);
    }
    	

	//To edit the details of particular username
    
    @RequestMapping(method=RequestMethod.PUT, value="/Edit/{UserName}")
	    public contact update(@PathVariable String UserName, @RequestBody contact contact) {
    	System.out.println("edit");
	        Optional<contact> optcontact = contactRepository.findByUserName(UserName);
	        contact c = optcontact.get();
	        if(contact.getFirstName() != null)
	            c.setFirstName(contact.getFirstName());
	        if(contact.getLastName() != null)
	            c.setLastName(contact.getLastName());
	        if(contact.getEmail() != null)
	            c.setEmail(contact.getEmail());
	       
	        contactRepository.save(c);
	        return c;
	       }
	  
	
	//To get all the data from db
	/**
	 * 
	 * @param user
	 * @return
	 */
	@RequestMapping(method = RequestMethod.GET, value = "/Details/{user}")
	public List<contact> contact(@PathVariable String user) {
		System.out.println(user +"user is");
		List<contact> details = new ArrayList<contact>();
		List<contact> alldata = contactRepository.findAll();
		for (contact contact : alldata) {
			if(!(contact.getUserName().equals(user))){
				System.out.println("in for");
				details.add(contact);
				System.out.println(contact + "contact particular");
			}
			}
		System.out.println(details + "whole");
		return details;
		
	}
	
    
      //To delete the data of particular user
    
      @RequestMapping(method=RequestMethod.DELETE, value="/Delete/{UserName}/{user}")
	    public List<contact> delete(@PathVariable String UserName, @PathVariable String user) {
		 System.out.println("in delete");
	        Optional<contact> optcontact = contactRepository.findByUserName(UserName);
	        contact contact = optcontact.get();
	        contactRepository.delete(contact);
	      
	        System.out.println(user);
	        List<contact> details = new ArrayList<contact>();
			List<contact> alldata = contactRepository.findAll();
			for (contact detaildata : alldata) {
				if(!(detaildata.getUserName().equals(user))){
					System.out.println("in for");
					details.add(detaildata);
					System.out.println(detaildata + "contact particular");
				}
				}
			System.out.println(details + "whole");
			return details;
//	        return contactRepository.findAll();
	       }


	
	
      //Encrytion of password
      
	 public static String encrypt(String strToEncrypt, String secret) 
	 {
		 String encyptedPassword;
	     try
	     {
	         byte[] iv = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
	         IvParameterSpec ivspec = new IvParameterSpec(iv);
	          
	         SecretKeyFactory factory = SecretKeyFactory.getInstance("PBKDF2WithHmacSHA256");
	         KeySpec spec = new PBEKeySpec(secretKey.toCharArray(), salt.getBytes(), 65536, 256);
	         SecretKey tmp = factory.generateSecret(spec);
	         SecretKeySpec secretKey = new SecretKeySpec(tmp.getEncoded(), "AES");
	          
	         Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
	         cipher.init(Cipher.ENCRYPT_MODE, secretKey, ivspec);
	         encyptedPassword= Base64.getEncoder().encodeToString(cipher.doFinal(strToEncrypt.getBytes("UTF-8")));
	         return encyptedPassword;
	     } 
	     catch (Exception e) 
	     {
	         System.out.println("Error while encrypting: " + e.toString());
	     }
	     return null;
	 }
	
	 
	 
	 //Decryption of password 
	 
	 public static String decrypt(String strToDecrypt, String secret) {
		    
		 String decryptedPassword;
		 try
		    {
		        byte[] iv = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
		        IvParameterSpec ivspec = new IvParameterSpec(iv);
		         
		        SecretKeyFactory factory = SecretKeyFactory.getInstance("PBKDF2WithHmacSHA256");
		        KeySpec spec = new PBEKeySpec(secretKey.toCharArray(), salt.getBytes(), 65536, 256);
		        SecretKey tmp = factory.generateSecret(spec);
		        SecretKeySpec secretKey = new SecretKeySpec(tmp.getEncoded(), "AES");
		         
		        Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5PADDING");
		        cipher.init(Cipher.DECRYPT_MODE, secretKey, ivspec);
		        decryptedPassword=new  String(cipher.doFinal(Base64.getDecoder().decode(strToDecrypt)));
		        return decryptedPassword;
		    } 
		    catch (Exception e) {
		        System.out.println("Error while decrypting: " + e.toString());
		    }
		    return null;
		}
	


	
	//To check the password and username while login
	 
	 @RequestMapping(method = RequestMethod.POST, value = "/login")
	public String userlogin(@RequestBody login data) {
		System.out.println("im in");
		String pwd = "";
		String myrole = "";
		String initial = "invalid";
		System.out.println(data.getUserName());
		System.out.println(data.getPassword());
		Optional<contact> alldata = contactRepository.findByUserName(data.getUserName());
		
		if(alldata.isPresent()){
			contact datas = alldata.get();
			pwd=decrypt(datas.getPassword(),secretKey);
			if (pwd.equals(data.getPassword())){
					Optional<contact> role1 = contactRepository.findByUserName(data.getUserName());
			
				contact use=role1.get();
				myrole = use.getRole();
				System.out.println(myrole + "------------------");
				
				}
			return myrole;
			}
		else{
			return initial;
		}
		

	 }
			
	}
	
	 
//	 @RequestMapping(method = RequestMethod.POST, value = "/login")
//		public Optional<contact> userlogin(@RequestBody login data) {
//		 String pwd = "";
//	Optional<contact> alldata = contactRepository.findByUserName(data.getUserName());
//	System.out.println(alldata);
//	if(alldata.isPresent()){
//	
//	contact datas = alldata.get();
//	System.out.println(datas);
//	pwd=decrypt(datas.getPassword(),secretKey);
//		if (pwd.equals(data.getPassword())){
//				return contactRepository.findByUserName(data.getUserName());
//			}	
//	}else{
//		return "invalid user";
//	}
//	return null;
//	}









//	 @RequestMapping(method = RequestMethod.POST, value = "/login")
//	public List<contact> userlogin(@RequestBody login data) {
//		System.out.println("im in");
//		String pwd = "";
//		Optional<contact> userdata = contactRepository.findByUserName(data.getUserName());
//		contact datas = userdata.get();
//		pwd=decrypt(datas.getPassword(),secretKey);
//			if (pwd.equals(data.getPassword())){
//					 contactRepository.findByUserName(data.getUserName());
//				}	
//			
//			
//			
//		List<contact> details = new ArrayList<contact>();
//		Iterable<contact> alldata = contactRepository.findAll();
//		for (contact contact : alldata) {
//			if(!(contact.getUserName().equals(data.getUserName()))){
//				System.out.println("in for");
//				details.add(contact);
//				System.out.println(contact);
//			}else{
//				
//			}
//			
//			}
//		System.out.println(details);
//		return details;
//	
//		}
//}
		
	//	Optional<contact> alldata = contactRepository.findByUserName(data.getUserName());
//		contact datas = alldata.get();
//		pwd=decrypt(datas.getPassword(),secretKey);
//			if (pwd.equals(data.getPassword())){
//					return contactRepository.findByUserName(data.getUserName());
//				}		
//		return null;
//	}
//		
//}










   