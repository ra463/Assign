// defining types for UserDevice
interface UserDevice {
  userId: string;
  deviceId: string;
  logged_in: Date;
  logged_out?: Date;
  lastSeenAt: Date;
}

// defining types for MonthlyStats
interface MonthlyStats {
  mau: number;
  mlu: number;
  mad: number;
  mld: number;
  aulsa: number;
  adlsa: number;
}

// function to calculate monthly stats
function calculateMonthlyStats(usersDevices: UserDevice[]): MonthlyStats {
  const uniqueUsers = new Set<string>(); // set to store unique userIds
  const uniqueDevices = new Set<string>(); // set to store unique deviceIds
  const activeUsersByLastSeenAt = new Set<string>(); // set to store unique userIds by lastSeenAt
  const activeDevicesByLastSeenAt = new Set<string>(); // set to store unique deviceIds by lastSeenAt

  // loop through usersDevices
  for (const userDevice of usersDevices) {
    uniqueUsers.add(userDevice.userId);
    uniqueDevices.add(userDevice.deviceId);

    if (userDevice.logged_in) {
      // Check if user was logged in at least once during the month
      uniqueUsers.add(userDevice.userId);

      // Check if device was logged in at least once during the month
      uniqueDevices.add(userDevice.deviceId);

      // Check if user had a lastSeenAt timestamp during the month
      if (userDevice.lastSeenAt) {
        activeUsersByLastSeenAt.add(userDevice.userId);
        activeDevicesByLastSeenAt.add(userDevice.deviceId);
      }
    }
  }

  // returning monthly stats
  return {
    mau: uniqueUsers.size,
    mlu: usersDevices.length,
    mad: uniqueDevices.size,
    mld: usersDevices.length,
    aulsa: activeUsersByLastSeenAt.size,
    adlsa: activeDevicesByLastSeenAt.size,
  };
}

// Example usage
const usersDevices: UserDevice[] = [
  {
    userId: "user1",
    deviceId: "device1",
    logged_in: new Date("2024-03-01"),
    lastSeenAt: new Date("2024-03-01"),
  },
  {
    userId: "user2",
    deviceId: "device2",
    logged_in: new Date("2024-03-02"),
    lastSeenAt: new Date("2024-03-03"),
  },
  {
    userId: "user3",
    deviceId: "device3",
    logged_in: new Date("2024-03-03"),
    lastSeenAt: new Date("2024-03-03"),
  },
  {
    userId: "user1",
    deviceId: "device4",
    logged_in: new Date("2024-03-05"),
    lastSeenAt: new Date("2024-03-06"),
  },
  {
    userId: "user2",
    deviceId: "device5",
    logged_in: new Date("2024-03-06"),
    lastSeenAt: new Date("2024-03-07"),
  },
];

const monthlyStats = calculateMonthlyStats(usersDevices);
console.log(monthlyStats);
