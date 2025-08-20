# useContext steps::

Provider Component:
1.import {Createcontext} fron react
export const mycontext=createcontext()
<Mycontext.provider value={value}>
<child/>
</Mycontext.provider>

Consummer Components
import react,{usecontext} from reacr
import {mycontext} from ./components
cosnt value =usecontext(mycontext)