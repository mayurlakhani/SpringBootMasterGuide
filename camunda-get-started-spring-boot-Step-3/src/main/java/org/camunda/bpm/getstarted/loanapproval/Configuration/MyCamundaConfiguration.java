/*
package org.camunda.bpm.getstarted.loanapproval.Configuration;

import javax.validation.Valid;

import org.camunda.bpm.getstarted.loanapproval.Model.TaskDetails;
import org.camunda.bpm.getstarted.loanapproval.Model.TimeSheet;
import org.camunda.bpm.getstarted.loanapproval.Repository.TaskDetailsRepository;
import org.camunda.bpm.getstarted.loanapproval.Repository.TimeSheetRepository;
import org.camunda.bpm.getstarted.loanapproval.service.CyresTrackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MyCamundaConfiguration implements CyresTrackService{
	@Autowired
	private TaskDetailsRepository taskDetailsRepository;
	
	@Autowired
	private TimeSheetRepository timeSheetRepository;
	
	@Override
	public void saveDetailsByTaskDefinationKey(@Valid TaskDetails task) {
		taskDetailsRepository.save(task);
		
	}

	@Override
	public void saveTimeSheet(@Valid TimeSheet timesheet) {
		timeSheetRepository.save(timesheet);
		
	}

	@Override
	public TimeSheet findById(long id) {
		// TODO Auto-generated method stub
		return timeSheetRepository.getOne(id);
	}

	@Override
	public void updateTimeSheet(TimeSheet updatedTimeSheet) {
		saveTimeSheet(updatedTimeSheet);
		
	}

	
	
	
}*/