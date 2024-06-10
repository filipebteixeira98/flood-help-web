import { generateAvatarURL } from '@cfx-kit/wallet-avatar';
import Web3 from 'web3';

import { closeRequest, donate } from '@/services/Web3Service';

export function Request({ data }) {
  function handleCloseRequest() {
    if (!confirm('Are you want to close this request?')) return;

    closeRequest(data.id)
      .then((result) => {
        alert(
          'Order closed successfully. In a few minutes it will no longer be seen on the website!'
        );

        window.location.reload();
      })
      .catch((error) => {
        console.error(error);

        alert(error.message);
      });
  }

  function handleHelpToRequest() {
    const donationInBnb = prompt('How much do you want to donate (in BNB)?', 0);

    donate(data.id, donationInBnb)
      .then((result) => {
        alert(
          'Donation sent successfully. In a few minutes it will be processed!'
        );

        window.location.reload();
      })
      .catch((error) => {
        console.error(error);

        alert(error.message);
      });
  }

  return (
    <>
      <div className="list-group-item list-group-item-action d-flex gap-3 py-3">
        <img
          src={generateAvatarURL(data.author)}
          width="32"
          height="32"
          className="rounded-circle"
        />
        <div className="d-flex gap-2 w-100 justify-content-between">
          <div className="w-100">
            <div className="row">
              <div className="col-10">
                <h6 className="mb-0">
                  {data.title} &rsaquo;&rsaquo; Contact: {data.contact}
                </h6>
              </div>
              <div className="col-2">
                <div className="text-end">
                  {localStorage.getItem('wallet') ===
                  data.author.toLowerCase() ? (
                    <button
                      type="button"
                      className="btn btn-danger btn-sm"
                      onClick={handleCloseRequest}
                    >
                      Close
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="btn btn-success btn-sm"
                      onClick={handleHelpToRequest}
                    >
                      &#36; To help
                    </button>
                  )}
                </div>
              </div>
            </div>
            <p className="opacity-75 pe-5 mb-0 me-5">{data.description}</p>
            <div className="row">
              <div className="col">
                <span className="me-1 opacity-75">Goal:</span>
                <span className="opacity-50">
                  {data.balance
                    ? `ETH/BNB ${Web3.utils.fromWei(
                        data.balance,
                        'ether'
                      )} obtained of ${Web3.utils.fromWei(data.goal, 'ether')}`
                    : `ETH/BNB ${Web3.utils.fromWei(data.goal, 'ether')}`}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
