package org.camunda.bpm.getstarted.loanapproval.service;

import javax.transaction.Transactional;
import javax.validation.Valid;

import org.camunda.bpm.getstarted.loanapproval.Model.Clients;
import org.camunda.bpm.getstarted.loanapproval.Model.Order;
import org.camunda.bpm.getstarted.loanapproval.Model.TaskDetails;
import org.camunda.bpm.getstarted.loanapproval.Model.TimeSheet;
import org.camunda.bpm.getstarted.loanapproval.Model.User;
import org.camunda.bpm.getstarted.loanapproval.Repository.ClientsRepository;
import org.camunda.bpm.getstarted.loanapproval.Repository.OrderRepository;
import org.camunda.bpm.getstarted.loanapproval.Repository.TaskDetailsRepository;
import org.camunda.bpm.getstarted.loanapproval.Repository.TimeSheetRepository;
import org.camunda.bpm.getstarted.loanapproval.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Service;

@Configuration
@Service
@Transactional
public class CyresTrackServiceImpl implements CyresTrackService{

	@Autowired
	private TaskDetailsRepository taskDetailsRepository;
	
	@Autowired
	private TimeSheetRepository timeSheetRepository;
	
	@Autowired
	private ClientsRepository clientsRepository;
	
	@Autowired
	private OrderRepository orderRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Override
	public void saveDetailsByTaskDefinationKey(@Valid TaskDetails task) {
		taskDetailsRepository.save(task);
		
	}

	@Override
	public void saveTimeSheet(@Valid TimeSheet timesheet) {
		timeSheetRepository.save(timesheet);
		
	}

	@Override
	public TimeSheet findById(long task_id) {
		return timeSheetRepository.getOne(task_id);
	}

	@Override
	public void updateTimeSheet(TimeSheet updatedTimeSheet) {
		saveTimeSheet(updatedTimeSheet);
		
	}

	@Override
	public void deleteTimeSheetById(long task_id) {
	timeSheetRepository.deleteById(task_id);
		
	}

	@Override
	public void saveClient(@Valid Clients client) {
		clientsRepository.save(client);
		
	}

	@Override
	public void saveOrder(@Valid Order order) {
		orderRepository.save(order);
		
	}

	@Override
	public void saveUser(@Valid User user) {
		userRepository.save(user);
		
	}

	@Override
	public User findByUserId(long id) {
		return userRepository.getOne(id);
	}

	@Override
	public void updateUser(User currentUser) {
		userRepository.save(currentUser);
		
	}

	@Override
	public void deleteUserById(long id) {
		userRepository.deleteById(id);
		
	}

	@Override
	public Clients findByClientId(long client_id) {
		return clientsRepository.getOne(client_id);
		
	}

	@Override
	public void updateClient(Clients clients) {
		clientsRepository.save(clients);
		
	}

	@Override
	public void deleteClient(long client_id) {
		clientsRepository.deleteById(client_id);
		
	}

	@Override
	public Order findByOrderId(long order_id) {
		return orderRepository.getOne(order_id);
	}

	@Override
	public void updateOrder(Order orders) {
		orderRepository.save(orders);
	}

	@Override
	public void deleteOrder(long order_id) {
		orderRepository.deleteById(order_id);
		
	}

	
	
	


	
}
