package com.ecomapi.ecom.utils;

import org.springframework.stereotype.Component;

import net.htmlparser.jericho.CharacterReference;

@Component
public class JerichoUtil {

    public static String encode(String str) {
        return CharacterReference.encode(str);
    }

    public static String decode(String str) {
        return CharacterReference.decode(str);
    }

}
