# Map activities

## Summary
- [Prisma models](#prisma-models)
- [Activity service](#activity-service)
- [Stats service](#stats-service)
- [Environment](#environment)

## Prisma models
Summary of models used in the application 

```
model Activity {
  id        Int          @id @default(autoincrement())
  type      ActivityType
  createdAt DateTime     @default(now()) @map("created_at")
  number    Int

  coordinates Coordinate[]

  @@map("activity")
}

model Coordinate {
  id  Int    @id @default(autoincrement())
  lat String
  lng String

  activity   Activity @relation(fields: [activityId], references: [id])
  activityId Int      @map("activity_id")

  @@map("coordinate")
}

enum ActivityType {
  SOIL
  FERTILIZATION
}
```

## Activity service
The Activity Service manages activities within the system, providing functionalities for creating, retrieving, updating, and deleting activities.

### Methods

#### Create Activity
The `create` method allows creating a new activity by providing the necessary data through a `CreateActivityDto`. Upon creation, the method returns an `ActivityDto` representing the newly created activity.

#### Find Activity
With the `findOne` method, you can retrieve a specific activity by its ID. If the activity exists, it returns an `ActivityDto` containing the details of the activity. If the activity is not found, it throws a `404 - Activity not found` error.

#### Find All Activities
The `findAll` method fetches all activities stored in the system and returns an array of `ActivityDto` representing each activity.

#### Update Activity
To update an existing activity, the `update` method is used, which takes an `UpdateActivityDto` containing the updated information and the ID of the activity to update. It returns an `ActivityDto` representing the updated activity.

#### Delete Activity
The `delete` method allows deleting an activity by its ID. It also removes associated coordinates of the activity before deleting it.

---

## Stats Service

The Stats Service provides statistical insights based on activities recorded within a specified time range.

### Functionality

#### Get Activities by Coordinates
The `getByCoordinates` method retrieves activities within a specified date range and returns an array of objects, each representing an activity's ID, type, and the number of associated coordinates.

#### Get Activities by Carbon Number
With the `getByCarbonNumber` method, you can retrieve activities within a specified date range and get detailed information about each activity.

#### Get Total Activities
The `getTotal` method computes and returns the total count of activities categorized by type (SOIL or FERTILIZATION) within the specified date range.

## Environment

| Environment       |
|-------------------|
| DATABASE_URL      |
| POSTGRES_USER     |
| POSTGRES_PASSWORD |
| POSTGRES_DATABASE |

