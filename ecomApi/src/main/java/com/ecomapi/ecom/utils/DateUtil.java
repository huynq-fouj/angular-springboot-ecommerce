package com.ecomapi.ecom.utils;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.stereotype.Component;

@Component
public class DateUtil {

    public static String getDate(String format) {
		DateFormat dateFormat = new SimpleDateFormat(format);
		Date date = new Date();
		return dateFormat.format(date);
	}
	
	public static String getDate() {
		return DateUtil.getDate("dd/MM/yyyy");
	}
	
	public static String getDateProfiles() {
		return DateUtil.getDate("ddMMyyHHmmss");
	}

}
