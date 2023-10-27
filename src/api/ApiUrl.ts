import {getApiUrl} from 'api/axios-config';

const url = getApiUrl();

export class ApiUrl {
    static me = url + '/me';

    static login() {
        return url + '/login';
    }

    static register() {
        return url + '/register';
    }

    static getUsers() {
        return url + '/users';
    }

    static getTodos(page?: number, limit?: number, q?: string) {
        let params = '';
        if (typeof page === 'number') {
            params += '?page=' + page;
        }
        if (typeof limit === 'number') {
            params += '&limit=' + limit;
        }
        if (typeof q === 'string' && q.length) {
            params += '&q=' + q;
        }
        return url + '/todos' + params;
    }

    static getTodosCount(q?: string) {
        let params = '';
        if (typeof q === 'string' && q.length) {
            params += '?q=' + q;
        }
        return url + '/todos-count' + params;
    }

    static sendTodoRequest(id: number) {
        return url + '/todo/' + id + '/privileges';
    }

    static getRequests() {
        return url + '/requests';
    }

    static processRequest(id: number, accept: boolean) {
        return url + '/todo/' + id + '/request';
    }

    private static todoWithId(id: number) {
        return url + '/todos/' + id;
    }

    static updateTodo(id: number) {
        return this.todoWithId(id);
    }

    static deleteTodo(id: number) {
        return this.todoWithId(id);
    }

    static createTodo() {
        return url + '/todos'
    }

    private static userWithId(id: number) {
        return url + '/user/' + id;
    }

    static updateUser(id: number) {
        return this.userWithId(id);
    }

    static banUser(id: number) {
        return url + '/ban/' + id;
    }

    static resetLogin(id: number) {
        return this.userWithId(id);
    }

    static resetPassword(id: number) {
        return this.userWithId(id);
    }
}

