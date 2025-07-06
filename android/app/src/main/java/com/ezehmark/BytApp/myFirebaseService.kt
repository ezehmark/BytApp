package com.ezehmark.BytApp

import android.content.Context
import android.provider.Settings
import android.util.Log
import com.google.firebase.messaging.FirebaseMessagingService
import com.google.firebase.messaging.RemoteMessage
import com.google.firebase.firestore.FirebaseFirestore
import com.google.firebase.firestore.FieldValue
import com.google.firebase.firestore.SetOptions
import java.util.UUID

class MyFirebaseMessagingService : FirebaseMessagingService() {

    override fun onMessageReceived(remoteMessage: RemoteMessage) {
        super.onMessageReceived(remoteMessage)

        Log.d("FCM", "From: ${remoteMessage.from}")

        // Handle data payload
        if (remoteMessage.data.isNotEmpty()) {
            Log.d("FCM", "Message data payload: ${remoteMessage.data}")
            // Optional: Show a notification manually here
        }

        // Handle notification payload
        remoteMessage.notification?.let {
            Log.d("FCM", "Message Notification Body: ${it.body}")
        }
    }

    override fun onNewToken(token: String) {
        super.onNewToken(token)
        Log.d("FCM", "Refreshed token: $token")

        val uuid = getDeviceUUID(applicationContext)
        val androidId = Settings.Secure.getString(contentResolver, Settings.Secure.ANDROID_ID)
        val db = FirebaseFirestore.getInstance()

        val data = hashMapOf(
            "fcm_token" to token,
            "device_id" to androidId,
            "device_uuid" to uuid,
            "updated_at" to FieldValue.serverTimestamp()
        )

        db.collection("cs_app_users")
            .document(uuid)
            .set(data, SetOptions.merge())
            .addOnSuccessListener {
                Log.d("FCM", "Token and device info saved for UUID: $uuid")
            }
            .addOnFailureListener { e ->
                Log.e("FCM", "Failed to save FCM data to Firestore", e)
            }
    }

    private fun getDeviceUUID(context: Context): String {
        val sharedPref = context.getSharedPreferences("app_prefs", Context.MODE_PRIVATE)
        var uuid = sharedPref.getString("device_uuid", null)
        if (uuid == null) {
            uuid = UUID.randomUUID().toString()
            sharedPref.edit().putString("device_uuid", uuid).apply()
        }
        return uuid
    }
}
