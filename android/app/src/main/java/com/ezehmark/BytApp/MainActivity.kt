package com.ezehmark.BytApp

import android.graphics.Color
import android.os.Bundle
import android.view.View
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate
import expo.modules.ReactActivityDelegateWrapper
import com.tencent.mmkv.MMKV

class MainActivity : ReactActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        // Initialize MMKV
        MMKV.initialize(this)
        val mmkv = MMKV.defaultMMKV()
        val isDark = mmkv.decodeBool("isDarkTheme", false)

        val bgColor = if (isDark) Color.BLACK else Color.WHITE

        // Set background between splash and app
        window.decorView.setBackgroundColor(bgColor)

        // Set status bar and nav bar color
        window.statusBarColor = bgColor
        window.navigationBarColor = bgColor

        // Optional: extend content behind bars
        window.decorView.systemUiVisibility = (
            View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION or
            View.SYSTEM_UI_FLAG_LAYOUT_STABLE
        )

        // Set the theme
        setTheme(if (isDark) R.style.AppTheme_Dark else R.style.AppTheme_Light)

        super.onCreate(null)
    }

    override fun getMainComponentName(): String = "main"

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
        if (android.os.Build.VERSION.SDK_INT <= android.os.Build.VERSION_CODES.R) {
            if (!moveTaskToBack(false)) {
                super.invokeDefaultOnBackPressed()
            }
            return
        }
        super.invokeDefaultOnBackPressed()
    }
}
