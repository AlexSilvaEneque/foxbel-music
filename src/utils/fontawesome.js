import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faBackwardStep, faEllipsisV, faForwardStep, faMagnifyingGlass, faPlay, faUser, faVolumeMute, faVolumeOff, faPause }
    from '@fortawesome/free-solid-svg-icons'

library.add(
    faUser,
    faMagnifyingGlass,
    faPlay,
    faEllipsisV,
    faForwardStep,
    faBackwardStep,
    faVolumeOff,
    faVolumeMute,
    faPause
)

export default ['font-awesome-icon', FontAwesomeIcon]