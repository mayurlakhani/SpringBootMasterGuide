package org.camunda.bpm.getstarted.loanapproval.Model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "clients")
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
public class Clients implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@Column(name = "client_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long client_id;

	@Column(name = "id")
	private String id;

	@Column(name = "client_name")
	private String client_name;

	@Column(name = "email")
	private String email;

	@Column(name = "str_name")
	private String str_name;

	@Column(name = "str_no")
	private String str_no;

	@Column(name = "city")
	private String city;

	@Column(name = "zip_code")
	private String zip_code;

	@Column(name = "profile")
	private String profile;

	/*
	 * @OneToOne(fetch = FetchType.LAZY, optional = false)
	 * 
	 * @JoinColumn(name = "user", nullable = false)
	 * 
	 * @JsonIgnore private User user;
	 */

	@Column(name = "purchase_department")
	private String purchase_department;

	@Column(name = "supplie_number")
	private String supplie_number;

	@Column(name = "invoice")
	private String invoice;

	/*
	 * public User getUser() { return user; }
	 * 
	 * public void setUser(User user) { this.user = user; }
	 */

	public Clients() {
	}

	public long getClient_id() {
		return client_id;
	}

	public void setClient_id(long client_id) {
		this.client_id = client_id;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getClient_name() {
		return client_name;
	}

	public void setClient_name(String client_name) {
		this.client_name = client_name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getStr_name() {
		return str_name;
	}

	public void setStr_name(String str_name) {
		this.str_name = str_name;
	}

	public String getStr_no() {
		return str_no;
	}

	public void setStr_no(String str_no) {
		this.str_no = str_no;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getZip_code() {
		return zip_code;
	}

	public void setZip_code(String zip_code) {
		this.zip_code = zip_code;
	}

	public String getProfile() {
		return profile;
	}

	public void setProfile(String profile) {
		this.profile = profile;
	}

	public String getPurchase_department() {
		return purchase_department;
	}

	public void setPurchase_department(String purchase_department) {
		this.purchase_department = purchase_department;
	}

	public String getSupplie_number() {
		return supplie_number;
	}

	public void setSupplie_number(String supplie_number) {
		this.supplie_number = supplie_number;
	}

	public String getInvoice() {
		return invoice;
	}

	public void setInvoice(String invoice) {
		this.invoice = invoice;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	public Clients(String id, String client_name, String email,
			String str_name, String str_no, String city, String zip_code,
			String profile, String purchase_department, String supplie_number,
			String invoice) {
		super();
		this.id = id;
		this.client_name = client_name;
		this.email = email;
		this.str_name = str_name;
		this.str_no = str_no;
		this.city = city;
		this.zip_code = zip_code;
		this.profile = profile;
		this.purchase_department = purchase_department;
		this.supplie_number = supplie_number;
		this.invoice = invoice;
	}

	
}