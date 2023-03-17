package com.douzone.emaillist.repository;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.douzone.emaillist.vo.EmaillistVo;


@Repository
public class EmaillistRepository {
	@Autowired
	private SqlSession sqlSession;
	
	public List<EmaillistVo> findAll() {
		return sqlSession.selectList("email.findAll");
	}
	
	public void insert(EmaillistVo vo) {
		sqlSession.insert("email.insert",vo);
	}

	public void delete(int no) {
		sqlSession.delete("email.delete",no);
	}

}
