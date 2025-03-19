using { sap.capire.homework as yours } from '../db/schema';

service TeacherService @(requires:'Teacher') {
    entity Teachers as projection on yours.Teachers;
    entity Classes as projection on yours.Classes;

    action deleteHomework (ID:Integer)
}