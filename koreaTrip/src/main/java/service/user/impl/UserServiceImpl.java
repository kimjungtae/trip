package treenote.service.user.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import treenote.domain.User;
import treenote.service.user.UserDao;
import treenote.service.user.UserService;;

@Service("userServiceImpl")
public class UserServiceImpl implements UserService {

	/// Field
	@Autowired
	@Qualifier("userDaoImpl")
	private UserDao userDao;

	public void setUserDao(UserDao userDao) {
		this.userDao = userDao;
	}

	/// Constructor
	public UserServiceImpl() {
		System.out.println(this.getClass());
	}

	@Override
	public void addUser(User user) throws Exception {
		System.out.println("service adduser");
		userDao.addUser(user);
		
	}

	@Override
	public User getUser(int userNo) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<User> ListFriend(int userNo) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int updateUser(User user) throws Exception {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public boolean checkDuplication(String email) throws Exception {
		// TODO Auto-generated method stub
		return false;
	}
	
	public User loginUser(User user) throws Exception{
		User returnUser = userDao.getLoginUser(user.getEmail());
		
		
		return returnUser;
	}
	
	@Override
	public User getUser2(String email) throws Exception{
		return userDao.getLoginUser(email);
	}
}