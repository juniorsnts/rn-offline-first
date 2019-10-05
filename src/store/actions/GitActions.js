import { GITREPOSITORY, GITREPOSITORY_RESPONSE } from './ActionTypes';
import { markActionsOffline } from 'redux-offline-queue'

export const Creators = {
    getRepository: repository => ({
        type: GITREPOSITORY,
        repository
    }),
    getRepositoryResponse: repository_all => ({
        type: GITREPOSITORY_RESPONSE,
        repository_all
    })
}

markActionsOffline(Creators, ['getRepository'])