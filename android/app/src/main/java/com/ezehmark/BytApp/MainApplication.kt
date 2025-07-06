package com.ezehmark.BytApp

import android.app.Application
import android.content.res.Configuration
import com.facebook.react.PackageList
import com.facebook.react.ReactApplication
import com.facebook.react.ReactNativeHost
import com.facebook.react.ReactPackage
import com.facebook.react.ReactHost
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.load
import com.facebook.react.defaults.DefaultReactNativeHost
import com.facebook.react.soloader.OpenSourceMergedSoMapping
import com.facebook.soloader.SoLoader
import com.google.firebase.messaging.FirebaseMessaging

import expo.modules.ApplicationLifecycleDispatcher
import expo.modules.ReactNativeHostWrapper

// ✅ Add Flipper import (debug only)
import com.facebook.flipper.android.FlipperClient
import com.facebook.flipper.android.FlipperClientImpl
import com.facebook.flipper.plugins.react.ReactFlipperPlugin
import com.facebook.flipper.plugins.network.NetworkFlipperPlugin
import com.facebook.react.modules.network.FlipperOkhttpInterceptor
import okhttp3.OkHttpClient

class MainApplication : Application(), ReactApplication {

  override val reactNativeHost: ReactNativeHost = ReactNativeHostWrapper(
    this,
    object : DefaultReactNativeHost(this) {
      override fun getPackages(): List<ReactPackage> {
        val packages = PackageList(this).packages
        // You can add additional packages manually here if needed
        return packages
      }

      override fun getJSMainModuleName(): String = ".expo/.virtual-metro-entry"

      // ✅ Enable dev tools only in debug
      override fun getUseDeveloperSupport(): Boolean = BuildConfig.DEBUG

      override val isNewArchEnabled: Boolean = BuildConfig.IS_NEW_ARCHITECTURE_ENABLED
      override val isHermesEnabled: Boolean = BuildConfig.IS_HERMES_ENABLED
    }
  )

  override val reactHost: ReactHost
    get() = ReactNativeHostWrapper.createReactHost(applicationContext, reactNativeHost)

  override fun onCreate() {
    super.onCreate()
    
    // ✅ Firebase initialized
    FirebaseMessaging.getInstance().setAutoInitEnabled(true)

    SoLoader.init(this, OpenSourceMergedSoMapping)

    if (BuildConfig.IS_NEW_ARCHITECTURE_ENABLED) {
      load()
    }

    // ✅ Flipper only in debug builds
    if (BuildConfig.DEBUG) {
      initializeFlipper()
    }

    ApplicationLifecycleDispatcher.onApplicationCreate(this)
  }

  override fun onConfigurationChanged(newConfig: Configuration) {
    super.onConfigurationChanged(newConfig)
    ApplicationLifecycleDispatcher.onConfigurationChanged(this, newConfig)
  }

  // ✅ Flipper init method (optional — basic setup)
  private fun initializeFlipper() {
    val client = FlipperClient.getInstance(this)
    client.addPlugin(ReactFlipperPlugin())
    client.addPlugin(NetworkFlipperPlugin())
    client.start()

    // Optional: use custom OkHttp with Flipper interceptor in dev builds
    val clientWithFlipper = OkHttpClient.Builder()
      .addNetworkInterceptor(FlipperOkhttpInterceptor(NetworkFlipperPlugin()))
      .build()
  }
}
