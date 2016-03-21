package treenote.service.user;

import java.util.List;

import treenote.domain.User;

public interface UserService {
	
	public void addUser(User user) throws Exception ;

	public User getUser(int userNo) throws Exception ;

	public List<User> ListFriend(int userNo) throws Exception ;

	public int updateUser(User user) throws Exception ;
	
	public boolean checkDuplication(String email) throws Exception;
	
	public User loginUser(User user) throws Exception;
	
	public User getUser2(String email)throws Exception;
}