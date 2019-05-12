package org.camunda.bpm.getstarted.loanapproval.service;

import javax.validation.Valid;

import org.camunda.bpm.getstarted.loanapproval.Model.Clients;
import org.camunda.bpm.getstarted.loanapproval.Model.Order;
import org.camunda.bpm.getstarted.loanapproval.Model.TaskDetails;
import org.camunda.bpm.getstarted.loanapproval.Model.TimeSheet;
import org.camunda.bpm.getstarted.loanapproval.Model.User;

public interface CyresTrackService {

	void saveDetailsByTaskDefinationKey(@Valid TaskDetails task);

	void saveTimeSheet(@Valid TimeSheet timesheet);

	TimeSheet findById(long task_id);

	void updateTimeSheet(TimeSheet updatedTimeSheet);

	void deleteTimeSheetById(long task_id);

	void saveClient(@Valid Clients client);

	void saveOrder(@Valid Order order);

	void saveUser(@Valid User user);

	User findByUserId(long id);

	void updateUser(User currentUser);

	void deleteUserById(long id);

	Clients findByClientId(long client_id);

	void updateClient(Clients clients);

	void deleteClient(long client_id);

	Order findByOrderId(long order_id);

	void updateOrder(Order orders);

	void deleteOrder(long order_id);

	
	


}
