/* eslint-disable no-return-await */
import Swal from 'sweetalert2';
import API_ENDPOINT from '../globals/api-endPoint';

class restoSource {
  static async myhome() {
    const response = await fetch(API_ENDPOINT.HOME);
    const responseJson = await response.json();
    return responseJson;
  }

  static async mydetail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }

  static async postReview(data) {
    const reviewResponse = await fetch(API_ENDPOINT.POST_REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (reviewResponse) {
      new Swal(
        'Done',
        'Data berhasil dikirim',
        'success',
      ).then(() => {
      });
      return await restoSource.mydetail(data.id);
    }
    Swal(
      'Error',
      'Anda belum mengisi nama atau review anda',
      'error',
    );
    return null;
  }
}

export default restoSource;
