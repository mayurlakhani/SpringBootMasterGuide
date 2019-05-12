package org.camunda.bpm.getstarted.loanapproval.Repository;

import org.camunda.bpm.getstarted.loanapproval.Model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long>{

}
