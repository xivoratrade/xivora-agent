use anchor_lang::prelude::*;

declare_id!("XIVO111111111111111111111111111111111111");

#[program]
pub mod router {
    use super::*;

    pub fn execute_prediction(
        _ctx: Context<ExecutePrediction>,
        market: String,
    ) -> Result<()> {
        msg!("Prediction executed: {}", market);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct ExecutePrediction<'info> {
    #[account(mut)]
    pub signer: Signer<'info>,
}
