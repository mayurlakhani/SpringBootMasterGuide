package org.camunda.bpm.getstarted.loanapproval.Repository;

import org.camunda.bpm.getstarted.loanapproval.Model.TaskDetails;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskDetailsRepository extends JpaRepository<TaskDetails, Long>{

}
