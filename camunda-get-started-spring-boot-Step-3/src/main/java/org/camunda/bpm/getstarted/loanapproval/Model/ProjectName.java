package org.camunda.bpm.getstarted.loanapproval.Model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="project_name")
public class ProjectName implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "project_name")
	private String project_name;

	@Column(name = "project_number")
	private String project_number;
	
	@Column(name = "track_number")
	private String track_number;
	
	public String getProject_number() {
		return project_number;
	}

	public void setProject_number(String project_number) {
		this.project_number = project_number;
	}

	public String getTrack_number() {
		return track_number;
	}

	public void setTrack_number(String track_number) {
		this.track_number = track_number;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getProject_name() {
		return project_name;
	}

	public void setProject_name(String project_name) {
		this.project_name = project_name;
	}

	public ProjectName(){}

	public ProjectName(String project_name, String project_number,
			String track_number) {
		super();
		this.project_name = project_name;
		this.project_number = project_number;
		this.track_number = track_number;
	}
	
}
