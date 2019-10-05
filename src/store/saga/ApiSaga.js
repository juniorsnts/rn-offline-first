import { put, takeEvery, take, all, spawn } from 'redux-saga/effects';
import { fecthRepository } from '../../services/api';
import { GITREPOSITORY } from '../actions/ActionTypes';
import { Creators } from '../../store/actions/GitActions';
import NetInfo from '@react-native-community/netinfo';
import { ONLINE, OFFLINE } from 'redux-offline-queue';
import { eventChannel } from 'redux-saga';

function* workerRepository({ repository }) {
    try {
        const response = yield fecthRepository.get(repository);
        yield put(Creators.getRepositoryResponse(response));
    } catch (err) {
        console.log(err)
    }
}

function* watcherRespository() {
    yield takeEvery(GITREPOSITORY, workerRepository);
}

function* startWatchingNetworkConnectivity() {
    const channel = eventChannel((emitter) => {
        NetInfo.isConnected.addEventListener('connectionChange', emitter)
        return () => NetInfo.isConnected.removeEventListener('connectionChange', emitter)
    })
    try {
        while (true) {
            const isConnected = yield take(channel)
            if (isConnected) {
                console.log('conectado');
                yield put({ type: ONLINE });
            } else {
                console.log('desconectado');
                yield put({ type: OFFLINE });
            }
        }
    } finally {
        channel.close()
    }
}

export default function* saga() {
    yield all([
        spawn(startWatchingNetworkConnectivity),
        watcherRespository()
    ]);
} 