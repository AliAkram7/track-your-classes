import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "io.aliakram7.trackyourclasses",
  appName: "Track Your Classes",
  webDir: "dist",
  server: {
    androidScheme: "http",
  },

  plugins: {
    CapacitorCookies: {
      enabled: true,
    },
    CapacitorSQLite: {
      iosDatabaseLocation: "Library/CapacitorDatabase",
      iosIsEncryption: true,
      iosKeychainPrefix: "angular-sqlite-app-starter",
      iosBiometric: {
        biometricAuth: false,
        biometricTitle: "Biometric login for capacitor sqlite",
      },
      androidIsEncryption: false,
      androidBiometric: {
        biometricAuth: false,
        biometricTitle: "Biometric login for capacitor sqlite",
        biometricSubTitle: "Log in using your biometric",
      },
      electronIsEncryption: true,
      electronWindowsLocation: "C:\\ProgramData\\CapacitorDatabases",
      electronMacLocation: "/Volumes/Development_Lacie/Development/Databases",
      electronLinuxLocation: "Databases",
    },
  },
};

export default config;
