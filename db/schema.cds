using {
    managed,
    sap
} from '@sap/cds/common';

namespace sap.capire.homework;

entity Homeworks : managed {
    key ID       : Integer;
        status   : String;
        date     : Integer;
        class    : Association to Classes;
        teacher  : Association to Teachers;
        subject  : String;
        task     : Association to many Task
                       on task.owner = $self;
        daysleft : Integer

}

entity Task {
    key ID          : Integer;
        owner       : Association to Homeworks;
        page_number : Integer;
        exercise    : Integer;
}

entity Teachers {
    key ID       : Integer;
        classes  : Association to many Classes
                       on classes.owner = $self;
        name     : String;
        subjects : String;

}

entity Classes {
    key ID    : Integer;
        owner : Association to Teachers;
        name  : String;
}
