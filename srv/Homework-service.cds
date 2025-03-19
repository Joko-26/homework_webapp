using {sap.capire.homework as my} from '../db/schema';

@path    : '/browse'
@requires: 'Student'
service HomeworkService {
    @readonly
    entity Homeworks as select from my.Homeworks;
    entity Task as projection on my.Task;

    action submitHomework(ID : Integer, daysleft : Integer);

}
