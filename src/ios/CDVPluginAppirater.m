//
//  CDVPluginAppirater.m
//  Appirater plugin for iOS
//
//  Created by Pixelcode on 05/12/2013.
//

#import "CDVPluginAppirater.h"
#import "Appirater.h"

@implementation CDVPluginAppirater

- (void) addAppiraterEvent:(CDVInvokedUrlCommand*)command {
    [Appirater userDidSignificantEvent:YES];
    [self.commandDelegate sendPluginResult:[CDVPluginResult resultWithStatus:CDVCommandStatus_OK] callbackId:command.callbackId];
}
@end