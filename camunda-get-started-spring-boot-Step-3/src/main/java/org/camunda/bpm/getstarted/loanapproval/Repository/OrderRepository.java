package org.camunda.bpm.getstarted.loanapproval.Repository;

import java.util.List;

import org.camunda.bpm.getstarted.loanapproval.Model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository<Order,Long>{

	List<Order> findByProfile(String profile);

	

}
