package org.camunda.bpm.getstarted.loanapproval.Model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name="task_details")
public class TaskDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="task_id")
	private Long taskId;
//	@Column
//	private String id;
	@Column
	private String name;
//	@Column
//	private String assignee;
//	@Column
//	private Date created;
//	@Column
//	private Date followUp;
//	@Column
//	private String delegationState;
//	@Column
//	private String processDefinitionId;
//	@Column
//	private String processInstanceId;
//	@Column
//	private String taskDefinitionKey;
//	@Column
//	private String suspended;
//	@Column
//	private String formKey;
//	@Column
//	private String tenantId;

	
	public Long getTaskId() {
		return taskId;
	}

	public void setTaskId(Long taskId) {
		this.taskId = taskId;
	}


//	public String getId() {
//		return id;
//	}
//
//	public void setId(String id) {
//		this.id = id;
//	}

	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	
//	public String getAssignee() {
//		return assignee;
//	}
//
//	public void setAssignee(String assignee) {
//		this.assignee = assignee;
//	}
//
//	
//	public Date getCreated() {
//		return created;
//	}
//
//	public void setCreated(Date created) {
//		this.created = created;
//	}
//
//	
//	public Date getFollowUp() {
//		return followUp;
//	}
//
//	public void setFollowUp(Date followUp) {
//		this.followUp = followUp;
//	}
//
//	
//	public String getDelegationState() {
//		return delegationState;
//	}
//
//	public void setDelegationState(String delegationState) {
//		this.delegationState = delegationState;
//	}
//
//
//	public String getProcessDefinitionId() {
//		return processDefinitionId;
//	}
//
//	public void setProcessDefinitionId(String processDefinitionId) {
//		this.processDefinitionId = processDefinitionId;
//	}
//
//	
//	public String getProcessInstanceId() {
//		return processInstanceId;
//	}
//
//	public void setProcessInstanceId(String processInstanceId) {
//		this.processInstanceId = processInstanceId;
//	}
//
//	public String getTaskDefinitionKey() {
//		return taskDefinitionKey;
//	}
//
//	public void setTaskDefinitionKey(String taskDefinitionKey) {
//		this.taskDefinitionKey = taskDefinitionKey;
//	}
//
//
//	public String getSuspended() {
//		return suspended;
//	}
//
//	public void setSuspended(String suspended) {
//		this.suspended = suspended;
//	}
//
//	
//	public String getFormKey() {
//		return formKey;
//	}
//
//	public void setFormKey(String formKey) {
//		this.formKey = formKey;
//	}
//
//	
//	public String getTenantId() {
//		return tenantId;
//	}
//
//	public void setTenantId(String tenantId) {
//		this.tenantId = tenantId;
//	}

}