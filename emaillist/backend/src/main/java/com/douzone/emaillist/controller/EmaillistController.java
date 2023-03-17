package com.douzone.emaillist.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController; 

import com.douzone.emaillist.dto.JsonResult;
import com.douzone.emaillist.repository.EmaillistRepository;
import com.douzone.emaillist.vo.EmaillistVo;

@RestController
@RequestMapping("/api")
public class EmaillistController {
	@Autowired
	private EmaillistRepository emaillistRepository;
	
	@GetMapping("/email")
	public ResponseEntity<JsonResult> getEmail() {
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(emaillistRepository.findAll()));
	}
	
	@PostMapping("/email")
	public ResponseEntity<JsonResult> insert(@RequestBody EmaillistVo emaillistVo) {
		emaillistRepository.insert(emaillistVo);
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(emaillistVo));
	}
	
	@DeleteMapping("/delete/{no}")
	public ResponseEntity<JsonResult> delete(@PathVariable int no) {
		emaillistRepository.delete(no);
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(no));
	}
	

}
