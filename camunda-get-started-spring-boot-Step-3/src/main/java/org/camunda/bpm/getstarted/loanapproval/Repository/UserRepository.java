package org.camunda.bpm.getstarted.loanapproval.Repository;

import org.camunda.bpm.getstarted.loanapproval.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

	User findById(String id);



}
