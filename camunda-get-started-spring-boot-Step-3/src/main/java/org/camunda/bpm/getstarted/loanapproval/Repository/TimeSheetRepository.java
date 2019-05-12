package org.camunda.bpm.getstarted.loanapproval.Repository;

import java.util.List;

import org.camunda.bpm.getstarted.loanapproval.Model.TimeSheet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TimeSheetRepository extends JpaRepository<TimeSheet, Long> {

	List<TimeSheet> findByProfile(String profile);

	

}