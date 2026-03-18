
import { fetchUsers } from '@/actions/userAction_14';


const UserList_14 = async () => {
    return (
        <div>
            <h2 className="mb-3 text-xl font-medium">User List</h2>
            <ul className="space-y-3 text-sm">
                {await fetchUsers().then(users => users.map(user => (
                    <li key={user.id} className="rounded border p-3">
                        <div>ID: {user.id}</div>
                        <div>Name: {user.name ?? 'null'}</div>
                        <div>Email: {user.email}</div>
                    </li>
                )))}
            </ul>

        </div>
    )
}

export default UserList_14;
