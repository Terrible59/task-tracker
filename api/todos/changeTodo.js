import $api from "../index";
export default async function changeTodo(data) {
    return $api.put(`todos/${data.id}`, JSON.stringify({
        title: data.title,
        done: data.done,
        approved: data.approved,
        date: data.date,
        journal: data.journal,
        slave_journal: data.slave_journal,
        repeat_each_day: data.repeat_each_day,
        change_date: (new Date()).toISOString(),
    })).then((response) => response.data);
}