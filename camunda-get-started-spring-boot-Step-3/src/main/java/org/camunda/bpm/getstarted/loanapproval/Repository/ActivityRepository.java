package org.camunda.bpm.getstarted.loanapproval.Repository;

import org.camunda.bpm.getstarted.loanapproval.Model.Activity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ActivityRepository extends JpaRepository<Activity, Long>{

}
