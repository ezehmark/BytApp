package com.ezehmark.BytApp

import android.graphics.Color
import android.os.Bundle
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate
import expo.modules.ReactActivityDelegateWrapper
import com.tencent.mmkv.MMKV

class MainActivity : ReactActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        // ✅ Initialize MMKV (only once, safe here)
        MMKV.initialize(this)

        // ✅ Read the theme flag saved by your JS app
        val mmkv = MMKV.defaultMMKV()
        val isDark = mmkv.decodeBool("isDarkTheme", false)

        // ✅ Dynamically set splash background before React mounts
        window.decorView.setBackgroundColor(if (isDark) Color.BLACK else Color.WHITE)

        // ✅ Optionally apply theme for native elements (if using styles.xml for that)
        setTheme(if (isDark) R.style.AppTheme_Dark else R.style.AppTheme_Light)

        // ✅ `null` prevents React splash re-init flickers
        super.onCreate(null)
    }

    override fun getMainComponentName(): String = "main" // must match JS entry point

    override fun createReactActivityDelegate(): ReactActivityDelegate {
        return ReactActivityDelegateWrapper(
            this,
            BuildConfig.IS_NEW_ARCHITECTURE_ENABLED,
            object : DefaultReactActivityDelegate(
                this,
                mainComponentName,
                fabricEnabled
            ) {}
        )
    }

    override fun invokeDefaultOnBackPressed() {
        // Better back press handling for older Android
        if (android.os.Build.VERSION.SDK_INT <= android.os.Build.VERSION_CODES.R) {
            if (!moveTaskToBack(false)) {
                super.invokeDefaultOnBackPressed()
            }
            return
        }
        super.invokeDefaultOnBackPressed()
    }
}
