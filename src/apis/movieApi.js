import callApi from "utils/callApi";
import {GROUP_ID} from "settings/apiConfig"

const movieApi = {
    fetchAllMovieApi(){
        return callApi(`QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}`)
    },

    fetchMovieDetailApi(movieId){
        return callApi(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieId}`)
    }
}

export default movieApi;