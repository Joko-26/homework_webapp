const { home } = require("@sap/cds");
const cds = require("@sap/cds");
const { SELECT, INSERT, UPDATE, DELETE } = cds.ql;

class HomeworkService extends cds.ApplicationService {
  async init() {
    const db = await cds.connect.to("db"); // connect to database service
    const { Homeworks } = db.entities;

    this.on("submitHomework", async (request) => {
      if (request.data.daysleft > 0) {
        let update = UPDATE `Homeworks` .where ({ID:request.data.ID}) .set `status = 'DONE'`
        let updated = await cds.db.run (update)
        return updated
      }
    });

    this.after("each", "Homeworks", (result) => {
      if (result.daysleft < 3) result.status = "IMPORANT";
    });

    return super.init();
  }
}
module.exports = HomeworkService;
