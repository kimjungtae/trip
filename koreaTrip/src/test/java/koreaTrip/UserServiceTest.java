package koreaTrip;

import java.util.List;
import java.util.Map;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import domain.User;
import service.user.UserService;

@RunWith(SpringJUnit4ClassRunner.class)

//@ContextConfiguration(locations = { "classpath:config/context-*.xml" })
@ContextConfiguration	(locations = {	"classpath:config/context-common.xml",
										"classpath:config/context-aspect.xml",
										"classpath:config/context-mybatis.xml",
										"classpath:config/context-transaction.xml" })
//@ContextConfiguration(locations = { "classpath:config/context-common.xml" })
public class UserServiceTest {

	@Autowired
	@Qualifier("userServiceImpl")
	private UserService userService;

	@Test
	public void testAddUser() throws Exception {
		
		User user = new User();
		user.setEmail("ak");
		user.setName("김정태");
				
		userService.addUser(user);

//		Page search = new Page();
//		search.setCurrentPage(1);
//		search.setPageSize(5);
//		search.setReplyValueNo(1000000);
//
//		List<Reply> list = replyService.listReply(search);
//		
//		for(Reply replys : list){
//			System.out.println("testListReply() Result :: "+replys);
//		}
	}

	
}