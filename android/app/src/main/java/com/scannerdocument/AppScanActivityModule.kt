package com.scannerdocument// replace com.your-app-name with your app’s name
import android.app.Activity
import android.content.Intent
import android.os.Bundle
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import info.hannes.liveedgedetection.activity.ScanActivity

class AppScanActivityModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    // add to CalendarModule.kt
    override fun getName() = "AppScanActivityModule"

    val reactContext = reactContext;

    val context = reactContext.applicationContext;

    val intent = Intent(context, ScanActivity::class.java).setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);

    @ReactMethod
    fun startScan() {
        reactContext.startActivity(intent)
    }


}