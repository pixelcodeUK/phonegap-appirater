//
//  CDVPluginAppirater.m
//  Appirater plugin for iOS
//
//  Created by Pixelcode on 05/12/2013.
//

#import <Cordova/CDV.h>
#import <Cordova/CDVJSON.h>
#import <Foundation/Foundation.h>

@interface CDVPluginAppirater : CDVPlugin

- (void) addAppiraterEvent:(CDVInvokedUrlCommand*)command;

@end