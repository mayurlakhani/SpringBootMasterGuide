package org.camunda.bpm.getstarted.loanapproval.Model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "time_sheet")
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
public class TimeSheet implements Serializable{
	
	private static final long serialVersionUID = 1L;


	@Id
	@Column(name = "task_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long task_id;

	
	@Column(name = "id")
	private String id;

	@Column(name = "start_date")
	private String start_date;

	@Column(name = "start_time")
	private String start_time;

	@Column(name = "end_date")
	private String end_date;

	@Column(name = "end_time")
	private String end_time;

	@Column(name = "hours")
	private String hours;

	@Column(name = "duration")
	private String duration;

	@Column(name = "minutes")
	private String minutes;

	@Column(name = "days")
	private String days;

	@Column(name = "activity_name")
	private String activity_name;

	@Column(name = "project")
	private String project;

	@Column(name = "track_number")
	private String track_number;

	@Column(name = "detail")
	private String detail;

	@Column(name = "comment")
	private String comment;

	@Column(name = "comment_type")
	private String comment_type;

	@Column(name = "current_location")
	private String current_location;

	@Column(name = "profile")
	private String profile;
	
	public String getProfile() {
		return profile;
	}

	public void setProfile(String profile) {
		this.profile = profile;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "user", nullable = false)
	@JsonIgnore
	private User user;

	public TimeSheet() {
	}

	public long getTask_id() {
		return task_id;
	}

	public void setTask_id(long task_id) {
		this.task_id = task_id;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getStart_date() {
		return start_date;
	}

	public void setStart_date(String start_date) {
		this.start_date = start_date;
	}

	public String getStart_time() {
		return start_time;
	}

	public void setStart_time(String start_time) {
		this.start_time = start_time;
	}

	public String getEnd_date() {
		return end_date;
	}

	public void setEnd_date(String end_date) {
		this.end_date = end_date;
	}

	public String getEnd_time() {
		return end_time;
	}

	public void setEnd_time(String end_time) {
		this.end_time = end_time;
	}

	public String getHours() {
		return hours;
	}

	public void setHours(String hours) {
		this.hours = hours;
	}

	public String getDuration() {
		return duration;
	}

	public void setDuration(String duration) {
		this.duration = duration;
	}

	public String getMinutes() {
		return minutes;
	}

	public void setMinutes(String minutes) {
		this.minutes = minutes;
	}

	public String getDays() {
		return days;
	}

	public void setDays(String days) {
		this.days = days;
	}

	public String getActivity_name() {
		return activity_name;
	}

	public void setActivity_name(String activity_name) {
		this.activity_name = activity_name;
	}

	public String getProject() {
		return project;
	}

	public void setProject(String project) {
		this.project = project;
	}

	public String getTrack_number() {
		return track_number;
	}

	public void setTrack_number(String track_number) {
		this.track_number = track_number;
	}

	public String getDetail() {
		return detail;
	}

	public void setDetail(String detail) {
		this.detail = detail;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public String getComment_type() {
		return comment_type;
	}

	public void setComment_type(String comment_type) {
		this.comment_type = comment_type;
	}

	public String getCurrent_location() {
		return current_location;
	}

	public void setCurrent_location(String current_location) {
		this.current_location = current_location;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	@Override
	public String toString() {
		return "TimeSheet [id=" + id + ", start_date=" + start_date
				+ ", start_time=" + start_time + ", end_date=" + end_date
				+ ", end_time=" + end_time + ", hours=" + hours + ", duration="
				+ duration + ", minutes=" + minutes + ", days=" + days
				+ ", activity_name=" + activity_name + ", project=" + project
				+ ", track_number=" + track_number + ", detail=" + detail
				+ ", comment=" + comment + ", comment_type=" + comment_type
				+ ", current_location=" + current_location + ", profile="
				+ profile + ", user=" + user + "]";
	}

	

	

	

	

}