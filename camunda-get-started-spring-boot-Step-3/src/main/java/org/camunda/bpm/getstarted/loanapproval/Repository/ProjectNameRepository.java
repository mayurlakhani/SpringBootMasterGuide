package org.camunda.bpm.getstarted.loanapproval.Repository;

import org.camunda.bpm.getstarted.loanapproval.Model.ProjectName;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectNameRepository extends JpaRepository<ProjectName, Long>{

}
