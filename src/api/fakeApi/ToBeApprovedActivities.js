import { HomeRepairService } from "@mui/icons-material";

export const getToBeApprovedActivities = () => {
        const activities = [
          {
            id: 1,
            name: "Home Repair Service",
            instanceName: "Apartment No. 2",
            owner: "Arash",
            scheduledTime: "4 hours",
            entry: "8:00 AM",
            exit: "11:00 AM",
            worker: "Ali",
            items: [
              {
                id:1,
                name: "item name 1",
                status: "finished",
                palannedNeededTime: "2 hr",
                start: "8:00 AM",
                end: "9:00 AM",
                rate: 0,
              },
              {
                id:2,
                name: "item name 2",
                status: "finished",
                palannedNeededTime: "2 hr",
                start: "9:00 AM",
                end: "11:00 AM",
                rate: 0,
              },
            ],
          },
          {
            id: 2,
            name: "House Keeping",
            instanceName: "Apartment No. 3",
            owner: "Marjan",
            scheduledTime: "8 hours",
            entry: "8:00 AM",
            exit: "4:00 PM",
            worker: "Maryam",
            items: [
              {
                id:1,
                name: "item name 1",
                status: "finished",
                palannedNeededTime: "2 hr",
                start: "8:00 AM",
                end: "10:00 AM",
                rate: 0,
              },
              
              {
                id:2,
                name: "item name 2",
                status: "finished",
                palannedNeededTime: "2 hr",
                start: "10:00 AM",
                end: "12:00 PM",
                rate: 0,
              },
              {
                id:3,
                name: "item name 3",
                status: "finished",
                palannedNeededTime: "2 hr",
                start: "12:00 PM",
                end: "02:00 PM",
                rate: 0,
              },
              {
                id:4,
                name: "item name 4",
                status: "finished",
                palannedNeededTime: "2 hr",
                start: "02:00 PM",
                end: "04:00 PM",
                rate: 0,
              },
            ],
          },
          {
            id: 3,
            name: "House Painting",
            instanceName: "Apartment No. 4",
            owner: "Siavash",
            scheduledTime: "10 hours",
            entry: "8:00 AM",
            exit: "8:00 PM",
            worker: "John",
            items: [
              {id:1,
                name: "item name 1",
                status: "finished",
                palannedNeededTime: "2 hr",
                start: "8:00 AM",
                end: "9:00 AM",
                rate: 0,
              },
              {
                id:2,
                name: "item name 2",
                status: "finished",
                palannedNeededTime: "2 hr",
                start: "9:00 AM",
                end: "11:00 AM",
                rate: 0,
              },
            ],
          },
          {
            id: 4,
            name: "Gardening",
            instanceName: "Apartment No. 4, Back Yard",
            owner: "Siavash",
            scheduledTime: "4 hours",
            entry: "1:00 PM",
            exit: "5:00 PM",
            worker: "Gardener",
            items: [
              {
                id:1,
                name: "item name 1",
                status: "finished",
                palannedNeededTime: "2 hr",
                start: "8:00 AM",
                end: "9:00 AM",
                rate: 0,
              },
              {
                id:2,
                name: "item name 2",
                status: "finished",
                palannedNeededTime: "2 hr",
                start: "9:00 AM",
                end: "11:00 AM",
                rate: 0,
              },
            ],
          },
          {
            id: 5,
            name: "House Keeping",
            instanceName: "Apartment No. 5",
            owner: "Marjan",
            scheduledTime: "6 hours",
            entry: "10:00 AM",
            exit: "4:00 PM",
            worker: "Nina",
            items: [
              {
                id:1,
                name: "item name 1",
                status: "finished",
                palannedNeededTime: "2 hr",
                start: "8:00 AM",
                end: "9:00 AM",
                rate: 0,
              },
              {
                id:2,
                name: "item name 2",
                status: "finished",
                palannedNeededTime: "2 hr",
                start: "9:00 AM",
                end: "11:00 AM",
                rate: 0,
              },
            ],
          },
          {
            id: 6,
            name: "Cooking",
            instanceName: "Apartment No. 2",
            owner: "Arash",
            scheduledTime: "4 hours",
            entry: "2:00 PM",
            exit: "6:00 PM",
            worker: "chef Leo",
            items: [
              {
                id:1,
                name: "item name 1",
                status: "finished",
                palannedNeededTime: "2 hr",
                start: "8:00 AM",
                end: "9:00 AM",
                rate: 0,
              },
              {
                id:2,
                name: "item name 2",
                status: "finished",
                palannedNeededTime: "2 hr",
                start: "9:00 AM",
                end: "11:00 AM",
                rate: 0,
              },
            ],
          },
        ];
         return activities;
       };

