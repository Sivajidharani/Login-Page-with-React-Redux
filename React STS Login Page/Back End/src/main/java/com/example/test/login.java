package com.example.test;

public class login {
	public String userName;
    public String password;
    
	public login() {
		super();
		// TODO Auto-generated constructor stub
	}
	public login(String userName, String password) {
		super();
		this.userName = userName;
		this.password = password;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
    
    
}
