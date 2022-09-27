package com.scannerdocument// replace com.your-app-name with your app’s name
import android.app.Activity
import android.content.Intent
import com.facebook.react.bridge.*
import info.hannes.liveedgedetection.ScanConstants
import info.hannes.liveedgedetection.activity.ScanActivity

class AppScanActivityModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    private var scannerPromise: Promise? = null

    val reactContext = reactContext;

    private val context = reactContext.applicationContext;

    private val intent = Intent(context, ScanActivity::class.java)

    private val activityEventListener =
        object : BaseActivityEventListener() {
            override fun onActivityResult(
                activity: Activity?,
                requestCode: Int,
                resultCode: Int,
                data: Intent?
            ) {
                if (requestCode == SCANNER_REQUEST) {
                    scannerPromise?.let { promise ->
                        when (resultCode) {
                            Activity.RESULT_CANCELED -> {
                                promise.reject(E_SCANNER_CANCELLED,"Scan was canceled")
                            }
                            Activity.RESULT_OK -> {
                                val filePath = data?.extras?.getString(ScanConstants.SCANNED_RESULT)
                                filePath?.let { promise.resolve(filePath.toString()) }
                                    ?: promise.reject(E_NO_IMAGE_DATA_FOUND, "No image data found")
                            }
                        }

                        scannerPromise = null
                    }
                }
            }
        }

    init {
        reactContext.addActivityEventListener(activityEventListener)
    }

    override fun getName() = "AppScanActivityModule"


    @ReactMethod
    fun startScan(promise: Promise) {

        val  activity = currentActivity

        if (activity == null) {
            promise.reject(E_ACTIVITY_DOES_NOT_EXIST, "Activity doesnt exist")
        }

        scannerPromise = promise

        try {
            reactContext.startActivityForResult(intent, SCANNER_REQUEST, null)
        }   catch (t: Throwable) {
            scannerPromise?.reject(E_FAILED_TO_SHOW_SCANNER)
            scannerPromise = null
        }

    }

    companion object {
        const val SCANNER_REQUEST = 1
        const val E_ACTIVITY_DOES_NOT_EXIST = "E_ACTIVITY_DOES_NOT_EXIST"
        const val E_SCANNER_CANCELLED = "E_SCANNER_CANCELLED"
        const val E_FAILED_TO_SHOW_SCANNER = "E_FAILED_TO_SHOW_SCANNER"
        const val E_NO_IMAGE_DATA_FOUND = "E_NO_IMAGE_DATA_FOUND"
    }


}