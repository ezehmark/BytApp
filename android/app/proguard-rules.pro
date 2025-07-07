# ----------------------------------------
# 🔒 ProGuard Rules for React Native
# ----------------------------------------

# Keep React Native classes (avoid crashes)
-keep class com.facebook.react.** { *; }
-dontwarn com.facebook.react.**

# Keep native modules & TurboModules
-keep class com.facebook.react.turbomodule.** { *; }
-keep class com.facebook.react.bridge.** { *; }
-keepclassmembers class * {
    @com.facebook.react.uimanager.UIProp <fields>;
}

# Required for Hermes
-keep class com.facebook.hermes.** { *; }
-dontwarn com.facebook.hermes.**

# Required for Reanimated 2
-keep class com.swmansion.reanimated.** { *; }
-keep class com.swmansion.gesturehandler.** { *; }
-dontwarn com.swmansion.**

# Required for Expo Modules (optional but safe)
-keep class expo.modules.** { *; }
-dontwarn expo.modules.**

# ----------------------------------------
# 🔥 Firebase Messaging & Analytics
# ----------------------------------------
-keep class com.google.firebase.** { *; }
-dontwarn com.google.firebase.**

# Prevent stripping annotations used by Firebase
-keepattributes *Annotation*

# ----------------------------------------
# 👀 Optional: Keep JSON serialization (if using GSON or Jackson)
# (Uncomment if needed)
# -keep class com.google.gson.** { *; }
# -dontwarn com.google.gson.**

# ----------------------------------------
# 👣 Optional: React Navigation (deep links)
# -keep class androidx.navigation.** { *; }
# -dontwarn androidx.navigation.**

# ----------------------------------------
# 👤 Keep custom Application class
-keep class com.ezehmark.BytApp.MainApplication { *; }

# ----------------------------------------
# 🛠 General Rules
# ----------------------------------------
-keepclassmembers class * {
    native <methods>;
}
-keepattributes InnerClasses, EnclosingMethod
-dontwarn javax.annotation.**
