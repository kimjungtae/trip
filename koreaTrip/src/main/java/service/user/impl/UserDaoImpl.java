package treenote.service.user.impl;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import treenote.domain.User;
import treenote.service.user.UserDao;

@Repository("userDaoImpl")
public class UserDaoImpl implements UserDao {

	/// Field
	@Autowired
	@Qualifier("sqlSessionTemplate")
	private SqlSession sqlSession;

	public void setSqlSession(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}

	/// Constructor
	public UserDaoImpl() {
		System.out.println(this.getClass());
	}

	@Override
	public void addUser(User user) throws Exception {
		// TODO Auto-generated method stub
		System.out.println("dao addUser");
		sqlSession.insert("UserMapper.addUser", user);

	}

	@Override
	public User getUser(int userNo) throws Exception {
		// TODO Auto-generated method stub
		return sqlSession.selectOne("UserMapper.getUser", userNo);
	}

	@Override
	public List<User> getFriendList(int userNo) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int updateUser(User user) throws Exception {
		// TODO Auto-generated method stub
		return sqlSession.update("UserMapper.updateUser",user);
	}

	@Override
	public boolean checkDuplication(String email) throws Exception {
		// TODO Auto-generated method stub
		return false;
	}
	
	
	@Override
	public User getLoginUser(String email) throws Exception{
		User user = sqlSession.selectOne("UserMapper.getLoginUser", email);
		return user;
	}

}