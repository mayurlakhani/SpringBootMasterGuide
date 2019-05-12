package org.camunda.bpm.getstarted.loanapproval.Controller;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.validation.Valid;

import org.camunda.bpm.getstarted.loanapproval.Model.Activity;
import org.camunda.bpm.getstarted.loanapproval.Model.Clients;
import org.camunda.bpm.getstarted.loanapproval.Model.Order;
import org.camunda.bpm.getstarted.loanapproval.Model.ProjectName;
import org.camunda.bpm.getstarted.loanapproval.Model.TaskDetails;
import org.camunda.bpm.getstarted.loanapproval.Model.TimeSheet;
import org.camunda.bpm.getstarted.loanapproval.Model.User;
import org.camunda.bpm.getstarted.loanapproval.Repository.ActivityRepository;
import org.camunda.bpm.getstarted.loanapproval.Repository.ClientsRepository;
import org.camunda.bpm.getstarted.loanapproval.Repository.OrderRepository;
import org.camunda.bpm.getstarted.loanapproval.Repository.ProjectNameRepository;
import org.camunda.bpm.getstarted.loanapproval.Repository.RoleRepository;
import org.camunda.bpm.getstarted.loanapproval.Repository.TimeSheetRepository;
import org.camunda.bpm.getstarted.loanapproval.Repository.UserRepository;
import org.camunda.bpm.getstarted.loanapproval.service.CyresTrackService;
import org.camunda.bpm.getstarted.loanapproval.util.CustomErrorType;
import org.joda.time.LocalTime;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class CyresController {

	public static final Logger logger = LoggerFactory
			.getLogger(RestController.class);

	@Autowired
	private CyresTrackService cyresTrackService;

	@Autowired
	private TimeSheetRepository timeSheetRepository;

	@Autowired
	private OrderRepository orderRepository;

	@Autowired
	private ClientsRepository clientsRepository;

	@Autowired
	private RoleRepository roleRepository;

	@Autowired
	private ProjectNameRepository projectNameRepository;

	@Autowired
	private ActivityRepository activityRepository;

	@Autowired
	private UserRepository userRepository;

	@GetMapping(value = "/getclient")
	public @ResponseBody Clients searchClient(@RequestParam String client_name) {

		return clientsRepository.findClientsByClientName(client_name);

	}

	@GetMapping(value = "/check")
	public String demo() {
		String sDate1 = "2019-03-23";
		String time1 = "10:34:34";
		try {
			DateFormat df3 = new SimpleDateFormat("yyyy-MM-dd");
			Date d1 = df3.parse(sDate1);
			LocalTime localTime = new LocalTime(time1);
			System.out.println("Time in  format is: ******" + localTime);
			System.out.println("Date in dd/MM/yyyy format is: "
					+ df3.format(d1));

			System.out.println("====================******>" + df3);
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return "";
	}

	// -------------------save Details by
	// TaskDefinationKey-------------------------------------------

	@RequestMapping(value = "/saveTasBykDefinationKey", method = RequestMethod.POST)
	public ResponseEntity<?> DetailsBytaskDefinationKey(
			@Valid @RequestBody TaskDetails task) {
		logger.info("save details by TaskDefinationKey : {}", task);

		cyresTrackService.saveDetailsByTaskDefinationKey(task);

		HttpHeaders headers = new HttpHeaders();

		return new ResponseEntity<String>(headers, HttpStatus.CREATED);
	}

	@GetMapping(path = "/timesheets")
	public @ResponseBody Iterable<TimeSheet> getAllTimeSheet() {

		return timeSheetRepository.findAll();
	}

	// -------------------save TimeSheet
	// -------------------------------------------

	@RequestMapping(value = "/save/timesheetform", method = RequestMethod.POST)
	public ResponseEntity<?> createTimeSheet(
			@Valid @RequestBody TimeSheet timesheet) throws ParseException {

		String dateStart = timesheet.getStart_date();
		// String startTime=timesheet.getStart_time();
		String dateStop = timesheet.getEnd_date();
		// String endTime=timesheet.getEnd_time();

		// HH converts hour in 24 hours format (0-23), day calculation
		// SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");

		DateFormat df3 = new SimpleDateFormat("MM/dd/yyyy");
		Date d1 = df3.parse(dateStart);
		Date d2 = df3.parse(dateStop);
		// LocalTime localTime = new LocalTime( time1 );
		// System.out.println("Time in  format is: ******"+localTime);

		timesheet.setStart_date(df3.format(d1));
		timesheet.setEnd_date(df3.format(d2));
		System.out.println("Date in MM/dd/yyyy format is: " + df3.format(d1));
		System.out.println("Date in MM/dd/yyyy format is: " + df3.format(d2));
		/*
		 * Date d1 = null; Date d2 = null; try { d1 = format.parse(dateStart);
		 * System.out.println("--------"+d1); } catch (ParseException e) { //
		 * TODO Auto-generated catch block e.printStackTrace(); }
		 */
		/*
		 * try {
		 * 
		 * d2 = format.parse(dateStop +" "+endTime);
		 * 
		 * //in milliseconds long diff = d2.getTime() - d1.getTime();
		 * 
		 * long diffSeconds = diff / 1000 % 60; long diffMinutes = diff / (60 *
		 * 1000) % 60; long diffHours = diff / (60 * 60 * 1000) % 24; long
		 * diffDays = diff / (24 * 60 * 60 * 1000);
		 * 
		 * System.out.print(diffDays + " days,======= ");
		 * System.out.print(diffHours + " hours,======= ");
		 * System.out.print(diffMinutes + " minutes, ======");
		 * System.out.print(diffSeconds + " seconds=====");
		 * 
		 * } catch (Exception e) { e.printStackTrace(); }
		 */

		logger.info("-------> save timesheet by id : {}", timesheet);

		System.out.println("---------------timesheet created---------------");
		cyresTrackService.saveTimeSheet(timesheet);

		HttpHeaders headers = new HttpHeaders();

		return new ResponseEntity<String>(headers, HttpStatus.CREATED);
	}

	// -------------------Retrieve Single
	// TimeSheet by Id------------------------------------------

	@RequestMapping(value = "/timesheet/{profile}", method = RequestMethod.GET)
	public ResponseEntity<?> getSingleTimeSheet(
			@PathVariable("profile") String profile) {
		logger.info("Fetching Timesheet with user {}", profile);
		List<TimeSheet> user = timeSheetRepository.findByProfile(profile);
		if (user == null) {
			logger.error("timeSheet with user {} not found.", user);
			return new ResponseEntity(new CustomErrorType(
					"timeSheet with user " + user + " not found"),
					HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<List<TimeSheet>>(user, HttpStatus.OK);
	}

	// ------------------- Update a TimeSheet
	// ------------------------------------------------

	@RequestMapping(value = "/timesheet/{id}", method = RequestMethod.PUT)
	public ResponseEntity<?> updateTimeSheet(@PathVariable("id") long task_id,
			@RequestBody TimeSheet timeSheet) {
		logger.info("Updating TimeSheet with id {}", task_id);

		TimeSheet updatedTimeSheet = cyresTrackService.findById(task_id);

		if (updatedTimeSheet == null) {
			logger.error("Unable to update. TimeSheet with id {} not found.",
					task_id);
			return new ResponseEntity(new CustomErrorType(
					"Unable to upate. TimeSheet with id " + task_id
							+ " not found."), HttpStatus.NOT_FOUND);
		}
		updatedTimeSheet.setStart_date(timeSheet.getStart_date());
		updatedTimeSheet.setEnd_date(timeSheet.getEnd_date());
		updatedTimeSheet.setStart_time(timeSheet.getStart_time());
		updatedTimeSheet.setEnd_time(timeSheet.getEnd_time());
		updatedTimeSheet.setId(timeSheet.getId());
		updatedTimeSheet.setDays(timeSheet.getDays());
		updatedTimeSheet.setHours(timeSheet.getHours());
		updatedTimeSheet.setMinutes(timeSheet.getMinutes());
		updatedTimeSheet.setDuration(timeSheet.getDuration());
		updatedTimeSheet.setActivity_name(timeSheet.getActivity_name());
		updatedTimeSheet.setProfile(timeSheet.getProfile());
		updatedTimeSheet.setProject(timeSheet.getProject());
		updatedTimeSheet.setComment(timeSheet.getComment());
		updatedTimeSheet.setComment_type(timeSheet.getComment_type());
		updatedTimeSheet.setCurrent_location(timeSheet.getCurrent_location());
		updatedTimeSheet.setDetail(timeSheet.getDetail());
		updatedTimeSheet.setUser(timeSheet.getUser());

		cyresTrackService.updateTimeSheet(updatedTimeSheet);
		return new ResponseEntity<>(updatedTimeSheet, HttpStatus.OK);
	}

	// ------------------- Retrive a Single
	// TimeSheet-----------------------------------------

	@RequestMapping(value = "/timeS/{id}", method = RequestMethod.GET)
	public ResponseEntity<?> FindTimeSheetById(@PathVariable("id") long task_id) {
		logger.info("Fetching TimeSheet with id {}", task_id);

		TimeSheet timeSheet = cyresTrackService.findById(task_id);
		if (timeSheet == null) {
			logger.error("Unable to delete. TimeSheet with id {} not found.",
					task_id);
			return new ResponseEntity(new CustomErrorType(
					"Unable to find. TimeSheet with id " + task_id
							+ " not found."), HttpStatus.NOT_FOUND);
		}

		return new ResponseEntity<TimeSheet>(timeSheet, HttpStatus.OK);
	}

	// ------------------- Delete a
	// TimeSheet-----------------------------------------

	@RequestMapping(value = "/timesheet/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<?> deleteTimeSheet(@PathVariable("id") long task_id) {
		logger.info("Fetching & Deleting TimeSheet with id {}", task_id);

		TimeSheet timeSheet = cyresTrackService.findById(task_id);
		if (timeSheet == null) {
			logger.error("Unable to delete. TimeSheet with id {} not found.",
					task_id);
			return new ResponseEntity(new CustomErrorType(
					"Unable to delete. TimeSheet with id " + task_id
							+ " not found."), HttpStatus.NOT_FOUND);
		}
		cyresTrackService.deleteTimeSheetById(task_id);
		return new ResponseEntity<TimeSheet>(HttpStatus.NO_CONTENT);
	}

	// ------------------- List Clients
	// -------------------------------------------
	@GetMapping(path = "/clients")
	public @ResponseBody Iterable<Clients> getAllClient() {

		return clientsRepository.findAll();
	}

	// ------------------- save Clients
	// -------------------------------------------

	@RequestMapping(value = "/save/clients", method = RequestMethod.POST)
	public ResponseEntity<?> createClient(@Valid @RequestBody Clients client) {
		logger.info("-------> save client by id : {}", client);

		System.out.println("---------------client created---------------");
		cyresTrackService.saveClient(client);

		HttpHeaders headers = new HttpHeaders();

		return new ResponseEntity<String>(headers, HttpStatus.CREATED);
	}

	// -------------------Retrieve Single
	// client------------------------------------------

	@RequestMapping(value = "/client/{id}", method = RequestMethod.GET)
	public ResponseEntity<?> getSingleClient(@PathVariable("id") long client_id) {
		logger.info("Fetching Client with id {}", client_id);
		Clients client = cyresTrackService.findByClientId(client_id);
		if (client == null) {
			logger.error("Client with id {} not found.", client_id);
			return new ResponseEntity(new CustomErrorType("Client with id "
					+ client_id + " not found"), HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Clients>(client, HttpStatus.OK);
	}

	// -------------------Retrieve Single
	// Client by Profile---------------------

	@RequestMapping(value = "/clients/{profile}", method = RequestMethod.GET)
	public ResponseEntity<?> getClientsByProfile(
			@PathVariable("profile") String profile) {
		logger.info("Fetching Client with user {}", profile);
		List<Clients> client = clientsRepository.findByProfile(profile);
		if (client == null) {
			logger.error("TimeSheet With User {} not found.", client);
			return new ResponseEntity(new CustomErrorType(
					"timeSheet with user " + client + " not found"),
					HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<List<Clients>>(client, HttpStatus.OK);
	}

	// ------------------- Delete a Client
	// -----------------------------------------

	@RequestMapping(value = "/client/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<?> deleteClient(@PathVariable("id") long client_id) {
		logger.info("Fetching & Deleting Client with id {}", client_id);

		Clients client = cyresTrackService.findByClientId(client_id);
		if (client == null) {
			logger.error("Unable to delete. Client with id {} not found.",
					client_id);
			return new ResponseEntity(new CustomErrorType(
					"Unable to delete. Client with id " + client_id
							+ " not found."), HttpStatus.NOT_FOUND);
		}
		cyresTrackService.deleteClient(client_id);
		return new ResponseEntity<User>(HttpStatus.NO_CONTENT);
	}

	// ------------------- Update a Client
	// ------------------------------------------------

	@RequestMapping(value = "/client/{id}", method = RequestMethod.PUT)
	public ResponseEntity<?> updateClient(@PathVariable("id") long client_id,
			@RequestBody Clients client) {
		logger.info("Updating User with id {}", client_id);

		Clients clients = cyresTrackService.findByClientId(client_id);

		if (clients == null) {
			logger.error("Unable to update. client with id {} not found.",
					client_id);
			return new ResponseEntity(new CustomErrorType(
					"Unable to upate. client with id " + client_id
							+ " not found."), HttpStatus.NOT_FOUND);
		}

		clients.setId(client.getId());
		clients.setClient_name(client.getClient_name());
		clients.setCity(client.getCity());
		clients.setEmail(client.getEmail());
		clients.setInvoice(client.getInvoice());
		clients.setPurchase_department(client.getPurchase_department());
		clients.setSupplie_number(client.getSupplie_number());
		clients.setInvoice(client.getInvoice());
		clients.setStr_name(client.getStr_name());
		clients.setStr_no(client.getStr_no());
		clients.setProfile(client.getProfile());
		clients.setZip_code(client.getZip_code());

		cyresTrackService.updateClient(clients);
		return new ResponseEntity<Clients>(clients, HttpStatus.OK);
	}

	// ------------------- List Orders
	// -------------------------------------------

	@GetMapping(path = "/orders")
	public @ResponseBody Iterable<Order> getAllOrder() {

		return orderRepository.findAll();
	}

	// ------------------- save Order
	// -------------------------------------------

	@RequestMapping(value = "/save/order", method = RequestMethod.POST)
	public ResponseEntity<?> createOrder(@Valid @RequestBody Order order) {
		logger.info("-------> save order by id : {}", order);

		/*String startDate = order.getStart_date();
		String endDate = order.getEnd_date();
		DateFormat df3 = new SimpleDateFormat("MM/dd/yyyy");
		Date d1 = df3.parse(startDate);
		Date d2 = df3.parse(endDate);
		order.setStart_date(df3.format(d1));
		order.setEnd_date(df3.format(d2));*/
		System.out.println("---------------order created---------------");
		cyresTrackService.saveOrder(order);

		HttpHeaders headers = new HttpHeaders();

		return new ResponseEntity<String>(headers, HttpStatus.CREATED);
	}

	// -------------------Retrieve Single
	// Order------------------------------------------

	@RequestMapping(value = "/singleorder/{id}", method = RequestMethod.GET)
	public ResponseEntity<?> getSingleOrder(@PathVariable("id") long order_id) {
		logger.info("Fetching Order with id {}", order_id);
		Order order = cyresTrackService.findByOrderId(order_id);
		if (order == null) {
			logger.error("order with id {} not found.", order_id);
			return new ResponseEntity(new CustomErrorType("order with id "
					+ order_id + " not found"), HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Order>(order, HttpStatus.OK);
	}

	// -------------------Retrieve Single
	// Order by Profile------------------------------------------

	@RequestMapping(value = "/order/{profile}", method = RequestMethod.GET)
	public ResponseEntity<?> getSingleOrderByProfile(
			@PathVariable("profile") String profile) {
		logger.info("Fetching Order with user {}", profile);
		List<Order> user = orderRepository.findByProfile(profile);
		if (user == null) {
			logger.error("timeSheet with user {} not found.", user);
			return new ResponseEntity(new CustomErrorType(
					"timeSheet with user " + user + " not found"),
					HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<List<Order>>(user, HttpStatus.OK);
	}

	// ------------------- Update a Order
	// ------------------------------------------------

	@RequestMapping(value = "/order/{id}", method = RequestMethod.PUT)
	public ResponseEntity<?> updateOrder(@PathVariable("id") long order_id,
			@RequestBody Order order) {
		logger.info("Updating Order with id {}", order_id);

		Order orders = cyresTrackService.findByOrderId(order_id);

		if (orders == null) {
			logger.error("Unable to update. Order with id {} not found.",
					order_id);
			return new ResponseEntity(new CustomErrorType(
					"Unable to upate. Order with id " + order_id
							+ " not found."), HttpStatus.NOT_FOUND);
		}

		orders.setId(order.getId());
		orders.setClient_name(order.getClient_name());
		orders.setBudget(order.getBudget());
		orders.setOrder_id(order.getOrder_id());
		orders.setProject_number(order.getProject_number());
		orders.setProject_type(order.getProject_type());
		orders.setPurchase_order(order.getPurchase_order());
		orders.setClient(order.getClient());
		orders.setStart_date(order.getStart_date());
		orders.setEnd_date(order.getEnd_date());
		orders.setRate(order.getRate());
		cyresTrackService.updateOrder(orders);
		return new ResponseEntity<Order>(orders, HttpStatus.OK);
	}

	// ------------------- Delete a Order
	// -----------------------------------------

	@RequestMapping(value = "/order/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<?> deleteOrder(@PathVariable("id") long order_id) {
		logger.info("Fetching & Deleting Order with id {}", order_id);

		Order order = cyresTrackService.findByOrderId(order_id);
		if (order == null) {
			logger.error("Unable to delete. Order with id {} not found.", order);
			return new ResponseEntity(
					new CustomErrorType("Unable to delete. Order with id "
							+ order + " not found."), HttpStatus.NOT_FOUND);
		}
		cyresTrackService.deleteOrder(order_id);
		return new ResponseEntity<Order>(HttpStatus.NO_CONTENT);
	}

	// ------------------- save User
	// -----------------------------------------

	@RequestMapping(value = "/save/user", method = RequestMethod.POST)
	public ResponseEntity<?> createUser(@Valid @RequestBody User user) {
		logger.info("-------> save user by id : {}", user);

		System.out.println("---------------user created---------------");
		cyresTrackService.saveUser(user);

		HttpHeaders headers = new HttpHeaders();

		return new ResponseEntity<String>(headers, HttpStatus.CREATED);
	}

	// -------------------Retrieve Single User
	// ------------------------------------------

	@RequestMapping(value = "/user/{id}", method = RequestMethod.GET)
	public ResponseEntity<?> getUser(@PathVariable("id") long id) {
		logger.info("Fetching User with id {}", id);
		User user = cyresTrackService.findByUserId(id);
		if (user == null) {
			logger.error("User with id {} not found.", id);
			return new ResponseEntity(new CustomErrorType("User with id " + id
					+ " not found"), HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<User>(user, HttpStatus.OK);
	}

	// ------------------- Update a User
	// ------------------------------------------------

	@RequestMapping(value = "/user/{id}", method = RequestMethod.PUT)
	public ResponseEntity<?> updateUser(@PathVariable("id") long id,
			@RequestBody User user) {
		logger.info("Updating User with id {}", id);

		User currentUser = cyresTrackService.findByUserId(id);

		if (currentUser == null) {
			logger.error("Unable to update. User with id {} not found.", id);
			return new ResponseEntity(new CustomErrorType(
					"Unable to upate. User with id " + id + " not found."),
					HttpStatus.NOT_FOUND);
		}

		currentUser.setEmail(user.getEmail());
		currentUser.setFirst_name(user.getFirst_name());
		currentUser.setLast_name(user.getLast_name());
		currentUser.setPassword(user.getPassword());
		currentUser.setRole(user.getRole());
		currentUser.setId(user.getId());
		cyresTrackService.updateUser(currentUser);
		return new ResponseEntity<User>(currentUser, HttpStatus.OK);
	}

	// ------------------- Delete a User
	// -----------------------------------------

	@RequestMapping(value = "/user/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<?> deleteUser(@PathVariable("id") long id) {
		logger.info("Fetching & Deleting User with id {}", id);

		User user = cyresTrackService.findByUserId(id);
		if (user == null) {
			logger.error("Unable to delete. User with id {} not found.", id);
			return new ResponseEntity(new CustomErrorType(
					"Unable to delete. User with id " + id + " not found."),
					HttpStatus.NOT_FOUND);
		}
		cyresTrackService.deleteUserById(id);
		return new ResponseEntity<User>(HttpStatus.NO_CONTENT);
	}

	// ------------------- List Project
	// -------------------------------------------

	@GetMapping(path = "/project")
	public @ResponseBody Iterable<ProjectName> getAllProject() {

		return projectNameRepository.findAll();
	}

	// ------------------- List Activity
	// -------------------------------------------

	@GetMapping(path = "/activity")
	public @ResponseBody Iterable<Activity> getAllActivity() {

		return activityRepository.findAll();
	}

}